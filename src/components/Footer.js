import React from "react";
import styled from "styled-components";
import { Productconsumer } from "../context/Context";

export default function Footer() {
  return (
    <Productconsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    copyright &copy; mobiz {new Date().getFullYear()}. all
                    rights reserved{" "}
                  </p>
                </div>

                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialIcons.map(item => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </Productconsumer>
  );
}

const FooterWrapper = styled.footer`
  background: #5f5e5e;
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: all 0.3s ease-in-out;
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
