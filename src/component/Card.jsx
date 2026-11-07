const Card = (prop) => {
  return (
    <div className="box">
      <div className="top">
        <img
          src={prop.logo}
        />

        <button type="button">
          Save{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-bookmark preview-icon"
          >
            <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
          </svg>
        </button>
      </div>

      <div className="center">
        <h3>
          {prop.company} <span>{prop.posted}</span>
        </h3>

        <h3>{prop.level}</h3>
        <div className="role">

        <span className="level">{prop.type}</span>
        <span className="level">{prop.role}</span>
        </div>
      </div>

      <div className="bottom">
        <div className="hr">
        <h3>{prop.salary}</h3>
        <p>{prop.location}</p>
        </div>
        <button type="button" className="apply-btn">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default Card;
