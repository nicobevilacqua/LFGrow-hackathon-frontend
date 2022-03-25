import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card(props: {
  title: string;
  subtitle: string;
  body: string;
  thumbnail: string;
  avatar: string;
  cid: string;
}) {
  return (
    <Link to={`/video/${props.cid}`}>
      <div className="component-86 flex-col-hcenter-vcenter">
        <img src={props.thumbnail} alt="Not Found" className="image-39" />
        <div className="frame-10425 flex-col-hcenter-vstart">
          <div className="root-card-heading-1 flex-col-hstart-vstart">
            <div className="root-card-heading flex-row-vcenter-hcenter">
              <div className="frame-10493 flex-col-hstart-vstart">
                <div className="frame-10435 flex-row-vstart-hstart">
                  <div className="frame-10434 flex-row-vstart-hstart">
                    <img src={props.avatar} alt="Not Found" className="frame-10423" />
                    <div className="frame-10425 flex-col-hcenter-vstart">
                      <div className="frame-10424 flex-col-hstart-vstart">
                        <div className="card-element-line-item-heading-enabled flex-col-hstart-vstart">
                          <p className="txt-695">{props.title}</p>
                        </div>
                        <div className="card-element-line-item-heading-enabled flex-col-hstart-vstart">
                          <p className="txt-605">{props.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="txt-771">{props.body}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
