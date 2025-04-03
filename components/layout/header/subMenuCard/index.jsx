import Image from "next/image";
import Styles from "../Header.module.scss";
import Link from "next/link";

const SubMenuCard = ({ variant }) => {
  return (
    <div
      className={`${Styles.subMenuCardContainer} ${
        variant === "WITH_HEADING" ? Styles.withHeadingLayout : ""
      }`}
    >
      <div className={Styles.leftContainer}>
        <div className={Styles.cardContainer}>
          <Image
            src="/submenu_img.webp"
            width={230}
            height={120}
            className={Styles.cardImage}
          />
          <div className={Styles.cardBody}>
            <p>AI Innovation of 2024: What Shaped the Industry</p>
            <Image src="/right_arrow.svg" width={16} height={16} />
          </div>
        </div>
        <div className={Styles.cardContainer}>
          <div className={Styles.cardBody}>
            <p>AI Innovation of 2024: What Shaped the Industry</p>
            <Image src="/right_arrow.svg" width={16} height={16} />
          </div>
        </div>
      </div>

      {variant === "SIMPLE" && (
        <div className={Styles.rightContainer}>
          <Link className={Styles.navigationItem} href="#">
            <div className={Styles.navigationTitle}>
              <p> About Techchefz Digital</p>
              <Image src="/right_arrow.svg" width={16} height={16} />
            </div>

            <p className={Styles.navigationDetails}>
              Humanizing Digital Experiences through Data, Creativity &
              Technology
            </p>
          </Link>
          <Link className={Styles.navigationItem} href="#">
            <div className={Styles.navigationTitle}>
              <p> Leadership & Team</p>
              <Image src="/right_arrow.svg" width={16} height={16} />
            </div>
            <p className={Styles.navigationDetails}>
              Meet the team behind the vision.
            </p>
          </Link>
        </div>
      )}

      {variant === "WITH_HEADING" && (
        <div className={Styles.rightContainer}>
          <div className={Styles.headingContainer}>
            <Image src="/submenuHeading.svg" width={56} height={56} />
            <div className={Styles.headingContent}>
              <h3 className={Styles.heading}>Technology Overview</h3>
              <div className={Styles.descriptionContent}>
                <p className={Styles.description}>
                  Explore features, capabilities, and benefits that define our
                  technology, paving the way for a seamless experience.
                </p>
                <Link href="#">
                  <button className={Styles.descriptionCta}>Overview</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={Styles.navigationItemContainer}>
            <div>
              <Link className={Styles.navigationItem} href="#">
                <div className={Styles.navigationTitle}>
                  <p> About Techchefz Digital</p>
                  <Image src="/right_arrow.svg" width={16} height={16} />
                </div>

                <p className={Styles.navigationDetails}>
                  Humanizing Digital Experiences through Data, Creativity &
                  Technology
                </p>
              </Link>
              <Link className={Styles.navigationItem} href="#">
                <div className={Styles.navigationTitle}>
                  <p>Commerce</p>
                  <Image src="/right_arrow.svg" width={16} height={16} />
                </div>

                <p className={Styles.navigationDetails}>
                  Humanizing Digital Experiences through Data, Creativity &
                  Technology
                </p>
              </Link>
              <Link className={Styles.navigationItem} href="#">
                <div className={Styles.navigationTitle}>
                  <p> About Techchefz Digital</p>
                  <Image src="/right_arrow.svg" width={16} height={16} />
                </div>

                <p className={Styles.navigationDetails}>
                  Humanizing Digital Experiences through Data, Creativity &
                  Technology
                </p>
              </Link>
            </div>
            <div>
              <Link className={Styles.navigationItem} href="#">
                <div className={Styles.navigationTitle}>
                  <p> About Techchefz Digital</p>
                  <Image src="/right_arrow.svg" width={16} height={16} />
                </div>

                <p className={Styles.navigationDetails}>
                  Humanizing Digital Experiences through Data, Creativity &
                  Technology
                </p>
              </Link>
              <Link className={Styles.navigationItem} href="#">
                <div className={Styles.navigationTitle}>
                  <p> About Techchefz Digital</p>
                  <Image src="/right_arrow.svg" width={16} height={16} />
                </div>

                <p className={Styles.navigationDetails}>
                  Humanizing Digital Experiences through Data, Creativity &
                  Technology
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubMenuCard;
