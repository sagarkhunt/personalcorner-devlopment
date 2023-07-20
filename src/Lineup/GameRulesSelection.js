import React from "react";
import { Row } from "react-bootstrap";

const PlayerSelection = () => {
  return (
    <>
      <div>
        <Row className="mt-4 lineUpPage">
          <div className="gameRuleParts">
            <div className="heading">
              <svg
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.649 0.607422C18.9418 0.607422 18.2635 0.888373 17.7634 1.38847C17.2633 1.88857 16.9824 2.56684 16.9824 3.27409C16.9824 3.98133 17.2633 4.65961 17.7634 5.15971C18.2635 5.6598 18.9418 5.94075 19.649 5.94075C20.3563 5.94075 21.0346 5.6598 21.5347 5.15971C22.0348 4.65961 22.3157 3.98133 22.3157 3.27409C22.3157 2.56684 22.0348 1.88857 21.5347 1.38847C21.0346 0.888373 20.3563 0.607422 19.649 0.607422ZM7.57353 5.94075C5.40553 5.94075 3.64905 7.69723 3.64905 9.86523C3.64905 11.1639 4.29059 12.3794 5.36259 13.11L10.0813 16.3236L9.06571 21.4173L11.6803 21.9408L12.9563 16.0267C13.047 15.5707 12.8954 15.1005 12.5527 14.7845L8.64905 11.2741H16.0214L17.1517 14.6595L20.8626 18.373C20.1871 19.1636 19.6384 20.247 19.649 21.0241C19.653 21.3028 19.726 21.5385 19.8886 21.7012C20.0513 21.8638 20.2857 21.9394 20.5657 21.9434C21.4404 21.9554 22.7256 21.2653 23.5162 20.4746C24.3069 19.6839 24.997 18.3988 24.985 17.5241C24.9797 17.2441 24.9055 17.0097 24.7428 16.847C24.5641 16.6683 24.297 16.5994 23.9824 16.61C23.7102 16.6192 23.4008 16.7061 23.0839 16.8236L19.4798 13.222C19.4798 13.222 18.7157 9.77409 18.4824 8.60742C18.149 6.94075 17.1224 5.94075 15.649 5.94075H7.57353ZM3.64905 13.3678V15.9017L0.195923 20.3132L2.31571 21.9408L6.03446 17.1673C6.22113 16.9407 6.31571 16.6481 6.31571 16.3548V15.3678L4.60998 14.2064C4.24999 13.9664 3.92905 13.6745 3.64905 13.3678Z"
                  fill="#9BE0F6"
                />
              </svg>
              <span className="ms-3">SETTING LINE UP</span>
            </div>
            <div className="details">
              <ul>
                <li>
                  Users will be initially allowed to start up to 4 offensive & 4
                  defensive players from their athlete token collection.
                </li>
                <li>
                  Once an athletes game starts in real life they will either be
                  locked into the starting lineup or locked on the users bench.
                  They will not be allowed to be added or removed to the users
                  lineup. This lock is released on Tuesday 12:00AM EST for NFL
                  games.
                </li>
              </ul>
            </div>
          </div>

          <div className="gameRuleParts">
            <div className="heading">
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7595 0.496095C25.7595 0.496095 16.1824 0.473178 8.71571 7.93985C8.37097 8.28458 8.07081 8.65987 7.79904 9.04818C6.47522 8.94233 4.44879 8.97691 3.41154 10.0148C0.990206 12.4362 0.182373 16.4732 0.182373 16.4732L5.51571 15.7107V17.5398L8.71571 20.7398H10.5449L9.78237 26.0732C9.78237 26.0732 13.8194 25.2653 16.2407 22.844C17.2786 21.8068 17.3132 19.7803 17.2074 18.4565C17.5957 18.1847 17.971 17.8846 18.3157 17.5398C25.7824 10.0732 25.7595 0.496095 25.7595 0.496095ZM17.249 6.87318C18.4277 6.87318 19.3824 7.82785 19.3824 9.00651C19.3824 10.1852 18.4277 11.1398 17.249 11.1398C16.0704 11.1398 15.1157 10.1852 15.1157 9.00651C15.1157 7.82785 16.0704 6.87318 17.249 6.87318ZM4.66154 18.6023C4.25621 18.709 3.87209 18.9126 3.55529 19.2294C2.09822 20.6865 2.33029 23.9232 2.33029 23.9232C2.33029 23.9232 5.54569 24.1744 7.02196 22.6982C7.33876 22.3814 7.54237 21.9952 7.64904 21.5898L7.16154 21.1023C7.11354 21.1706 7.08382 21.2499 7.02196 21.3107C5.98196 22.3507 4.42196 21.8315 4.42196 21.8315C4.42196 21.8315 3.90172 20.2715 4.94279 19.2315C5.00466 19.1696 5.08077 19.141 5.14904 19.0919L4.66154 18.6023Z"
                  fill="#9BE0F6"
                />
              </svg>

              <span className="ms-3">BOOSTS</span>
            </div>
            <div className="details">
              <ul>
                <li>
                  Veteran (1), Hall of Fame (3), and GOAT (5) NFTs will have 2x
                  XP Boost(s) when initially purchased. Users will have the
                  ability to apply a boost to their player if there are any
                  available. The boost is used after the athlete completes their
                  game.
                </li>
              </ul>
            </div>
          </div>

          <div className="gameRuleParts">
            <div className="heading">
              <svg
                width="26"
                height="23"
                viewBox="0 0 26 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.2012 0.648438L20.7012 5.02344L17.4199 3.36719L16.6387 2.99219L16.1387 3.71094L12.7324 8.83594L9.57617 6.46094L8.98242 6.02344L8.38867 6.46094L4.76367 9.17969L1.23242 8.30469L0.732422 10.2422L4.73242 11.2422L5.20117 11.3672L5.57617 11.0859L8.98242 8.52344L12.3887 11.0859L13.2324 11.7109L13.8262 10.8359L17.3262 5.58594L20.5449 7.17969L21.2637 7.52344L25.7637 1.89844L24.2012 0.648438ZM17.0449 13.5859L16.2012 14.6484L12.7949 18.8984L9.57617 16.4609L8.98242 16.0234L8.38867 16.4609L4.88867 19.0859L1.41992 17.3672L0.544922 19.1797L4.54492 21.1797L5.07617 21.4297L5.57617 21.0859L8.98242 18.5234L12.3887 21.0859L13.1699 21.6484L13.7637 20.8984L16.8887 16.9922L20.1387 21.8359L20.9199 22.9609L21.7637 21.8984L25.7637 16.8984L24.2012 15.6484L21.0762 19.5547L17.8262 14.7109L17.0449 13.5859Z"
                  fill="#9BE0F6"
                />
              </svg>

              <span className="ms-3">STAT/XP/PCC DISTRIBUTION</span>
            </div>
            <div className="details">
              <ul>
                <li>
                  XP will be rewarded based on the athletes individual stats
                  that they put in a game. XP will level up the athlete tokens.
                </li>
                <li>
                  The amount of PCC rewarded for in-game & season goals achieved
                  by the athletes will be determined by the level of the athlete
                  token. (i.e. the higher level of the athlete token the more
                  PCC will be rewarded for an achieved goal)
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default PlayerSelection;
