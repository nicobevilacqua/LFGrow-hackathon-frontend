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
      <div className="card">
        <img src={props.thumbnail} className="thumbnail" />
        <div>
          <div className="frame-10493">
            <img src={props.avatar} className="avatar" />
            <div className="frame-10425">
              <div className="frame-10424">
                <div className="card-element-line-item-heading-enabled">
                  <p className="title">{props.title}</p>
                </div>
                <div className="card-element-line-item-heading-enabled">
                  <p className="subtitle">{props.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="body">{props.body}</p>
      </div>
    </Link>
  );
}
