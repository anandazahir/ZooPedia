import React from "react";
import { Carousel } from "react-bootstrap";

export default function Hero() {
  return (
    <Carousel controls>
      <Carousel.Item>
        <div className="jumbotron-mask  bg-image rounded-3">
          <img
            src="https://cms-cdn.zaonce.net/2019-10/komododragon.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="mask">
            <div class="carousel-caption d-none d-md-block">
              <h5>Komodo Dragon</h5>
              <p>
                The Komodo dragon (or Varanus komodoensis) is a large species of
                reptile that lives on the Indonesian isles of Komodo, Rinca,
                Flores and Gili Motang. They are a dull green-brown in colour
                with wide set limbs with a wide gape, have a long, muscular
                tail, and a yellow forked tongue. The males reach an average
                length of 2.59m and usually weigh between 79 and 91kg, whereas
                the females are smaller, averaging 2.29m long and between 68 and
                73kg.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="jumbotron-mask  bg-image rounded-3">
          <img
            src="/images/borneanOrangutan.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="mask">
            <div class="carousel-caption d-none d-md-block">
              <h5>Bornean Orangutan</h5>
              <p>
                The orangutan (or Pongo pygmaeus) is native to the island of
                Borneo, their range also spanning areas of Bornean Indonesia and
                Malaysia. They are large apes identifiable by their red fur and
                brown skin, while mature males also have distinct, large cheek
                pads and throat pouches used for making loud vocalizations to
                attract females. They are incredibly intelligent animals and
                have been observed creating and using tools in the wild to
                acquire food. However, they cannot swim and their range is often
                limited by rivers that they cannot cross in the wild.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="jumbotron-mask  bg-image rounded-3">
          <img
            src="/images/articWolf.jpg"
            className="d-block w-100 img-fluid"
            alt="..."
          />
          <div className="mask">
            <div class="carousel-caption d-none d-md-block">
              <h5>Artic Wolf</h5>
              <p>
                Arctic wolves (or Canis lupus arctos) are a large canid species
                that live in Northern Canada and Greenland. Also known as white
                wolves, they are large pack predators that feed primarily on
                muskoxen and arctic hares, although they may also eat foxes,
                birds and bear cubs, as well as occasionally scavenging carrion.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
