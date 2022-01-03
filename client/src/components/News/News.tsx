import React from "react";
import "./news.scss";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import axios from "axios";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";

export default function News() {
  async function getRandomUser() {
    try {
      const data = await axios.get(
        "https://random-data-api.com/api/cannabis/random_cannabis?size=2&is_xml=true"
      );
      return data;
    } catch (err) {
      console.log("error: ", err);
    }
  }

  return (
    <div className="news">
      <div className="content">
        <div className="left">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} lg={8}>
              <Card hoverable className="news-card">
                <div className="photo">
                  <img
                    src="https://assets.biathlonworld.com/image/upload/f_auto,c_fill,g_face,ar_3:2,w_750,q_auto/Photo%20Database/2021-2022/World%20Cup/WC%204%20Annecy%20-%20Le%20Grand%20Bornand/Women%20Pursuit/Group181221vt022"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h1>Uutiskortti</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusamus quam exercitationem fugit fuga perspiciatis
                    placeat alias porro tempora vel similique. Quas impedit
                    aspernatur aliquid nihil explicabo praesentium neque
                    expedita laudantium!
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="right">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="biathlonworld"
            options={{ height: 400 }}
          />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="BiathlonLivefr"
            options={{ height: 400 }}
          />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="IBU_WC"
            options={{ height: 400 }}
          />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="IBU_Junior"
            options={{ height: 400 }}
          />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="biathloncanada"
            options={{ height: 400 }}
          />{" "}
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="czech_Biathlon"
            options={{ height: 400 }}
          />{" "}
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="realbiathlon"
            options={{ height: 400 }}
          />{" "}
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="USBiathlon"
            options={{ height: 400 }}
          />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="russianbiathlon"
            options={{ height: 400 }}
          />{" "}
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="BiathlonFI"
            options={{ height: 400 }}
          />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="NSSF_Biathlon"
            options={{ height: 400 }}
          />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName=""
            options={{ height: 400 }}
          />
        </div>
      </div>
    </div>
  );
}
