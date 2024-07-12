import { useTranslation } from "react-i18next";
import team_right_screen_img from "./images/right_screen_img.svg";

function Team() {
  const { t } = useTranslation();

  return (
    <div className="mt-10 bg-custom-green" id="team">
      <div className="container">
        <h1 className="title">Team</h1>
        <div className="grid grid-cols-2 gap-20">
          <div className="font-semibold pr-20">
            <p className="subtitle">
              {t("main_page.subtitle")}
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <p className="text-9xl text-custom-blue font-semibold my-5">100+</p>
            <p className="text-3xl text-gray-700">Dedicated team</p>
          </div>
          <div className="">
            <img src={team_right_screen_img} alt="udevs main image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
