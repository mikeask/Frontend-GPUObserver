import axios from "axios";
import React, { useEffect, useState } from "react";

import { Container, Card } from "./styles";

import { BsTwitter, BsArrowDown } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";

type GpuPriceType = {
  links: string[];
  _id: string;
  lastPrice: number;
  lastPriceDate: string;
  minorPrice: number;
  minorPriceDate: string;
};

axios.defaults.baseURL = "http://localhost:4000";

const Overview: React.FC = () => {
  const [gpuPrices, setGpuPrices] = useState<GpuPriceType[]>([]);

  const fetchGpuPrices = async () => {
    const fetchResult = await axios.get<GpuPriceType[]>("/GPU/last-prices");
    console.log(fetchResult.data);
    setGpuPrices(fetchResult.data);
  };

  useEffect(() => {
    fetchGpuPrices();
  }, []);

  function formatDate(date: string) {
    const fixedDate = new Date(date);
    const day =
      fixedDate.getDay() > 9 ? fixedDate.getDay() : `0${fixedDate.getDay()}`;
    const month =
      fixedDate.getMonth() > 9
        ? fixedDate.getMonth()
        : `0${fixedDate.getMonth()}`;
    const year = fixedDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <Container>
      {gpuPrices.map((gpuPrice) => {
        return (
          <Card key={gpuPrice._id}>
            <div className="title">
              <h1>{gpuPrice._id}</h1>
            </div>

            <div className="center-price">
              <p>Novo preço</p>
              <div className="hr" />
              <div className="price-box">
                <h2>R$ {gpuPrice.lastPrice}</h2>
              </div>
              <p>{formatDate(gpuPrice.lastPriceDate)}</p>
            </div>

            <div className="links">
              <div className="twitter">
                <BsTwitter color="#2C9FD3" />

                <a
                  href="https://twitter.com/observatorioGPU"
                  target="_blank"
                  rel="noreferrer"
                >
                  @observatorioGPU
                </a>
              </div>
              <div className="anuncio-tweet">
                <a href={gpuPrice.links[0]} target="_blank" rel="noreferrer">
                  Ver anúncio <MdOpenInNew />
                </a>
                {gpuPrice.links.length > 1 && (
                  <a href={gpuPrice.links[1]} target="_blank" rel="noreferrer">
                    Ver tweet <MdOpenInNew />
                  </a>
                )}
              </div>
            </div>

            <div className="minor-price">
              <p>
                Menor valor registrado <BsArrowDown />{" "}
              </p>
              <div className="valor-date">
                <div>
                  <p className="strong">Valor</p>
                  <p>{`R$ ${gpuPrice.minorPrice}`}</p>
                </div>
                <div className="divisor" />
                <div>
                  <p className="strong">Data</p>
                  <p>{formatDate(gpuPrice.minorPriceDate)}</p>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </Container>
  );
};

export default Overview;
