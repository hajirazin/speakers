import React from "react";
import styles from "./styles.module.css";

type PreviousTalksType = {
  title: string;
  link: string;
};

type SpeakerType = {
  name: string;
  role: string;
  company: string;
  github: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
  pronouns?: string;
  location?: string;
  shortBiography?: string;
  travel?: string;
  areaOfInterest?: string;
  payAndExpenses?: string;
  speakerExperience?: string;
  noPastSpeakingEngagements?: string;
  coachNewSpeakers?: string;
  languages?: string[];
  MAPA?: string;
  underrepresentedMinority?: string;
  talkAbout?: string;
  previousTalks?: PreviousTalksType[];
  notes?: string;
};

export default function Speaker({
  name,
  role,
  company,
  github,
  linkedin,
  twitter,
  website,
  pronouns,
  location,
  shortBiography,
  travel,
  payAndExpenses,
  areaOfInterest,
  speakerExperience,
  noPastSpeakingEngagements,
  coachNewSpeakers,
  languages,
  MAPA,
  underrepresentedMinority,
  talkAbout,
  previousTalks,
  notes,
}: SpeakerType): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {shortBiography && (
          <>
            <h2>Bio</h2>
            <p>{shortBiography}</p>
          </>
        )}
        {travel && (
          <>
            <h2>Travel</h2>
            <p>{travel}</p>
          </>
        )}
        {payAndExpenses && (
          <>
            <h2>Pay and Expenses</h2>
            <p>{payAndExpenses}</p>
          </>
        )}
        {areaOfInterest && (
          <>
            <h2>Area of Interest</h2>
            <p>{areaOfInterest}</p>
          </>
        )}
        {speakerExperience && (
          <>
            <h2>Speaker Experience</h2>
            <p>{speakerExperience}</p>
          </>
        )}
        {noPastSpeakingEngagements && (
          <>
            <h2>Number of past speaking engagements</h2>
            <p>{noPastSpeakingEngagements}</p>
          </>
        )}
        {previousTalks && (
          <>
            <h2>Pervious Talks</h2>
            <ul>
              {previousTalks.map((talk) => {
                const isYoutubeLink = talk.link.match(
                  /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((?:\w|-){11})(?![\w-])/
                );

                // extract the video id from the url
                const videoId = isYoutubeLink ? isYoutubeLink[1] : null;
                return (
                  <li key={talk.link}>
                    <a
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {talk.title}
                    </a>
                    {videoId && (
                      <div>
                        <iframe
                          width="420"
                          height="215"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        )}
        {coachNewSpeakers && (
          <>
            <h2>Willing to provide coaching and advice to new speakers</h2>
            <p>{coachNewSpeakers}</p>
          </>
        )}
        {languages && (
          <>
            <h2>Languages</h2>
            <p>
              {languages.map((language) => (
                <span key={language} className={styles.language}>
                  {language}
                </span>
              ))}
            </p>
          </>
        )}
        {MAPA && (
          <>
            <h2>Is in a MAPA (Most affected people and places) </h2>
            <p>{MAPA}</p>
          </>
        )}
        {underrepresentedMinority && (
          <>
            <h2>Is part of an underrepresented minority</h2>
            <p>{underrepresentedMinority}</p>
          </>
        )}
        {talkAbout && (
          <>
            <h2>Want to talk about</h2>
            <p>{talkAbout}</p>
          </>
        )}
        {notes && (
          <>
            <h2>Other notes</h2>
            <p>{notes}</p>
          </>
        )}
      </div>
      <div className={styles.speaker}>
        <div className={styles.avatar}>
          <img src={`https://github.com/${github}.png`} alt="avatar" />
        </div>
        <div>
          <span className={styles.name}>{name}</span>
          <i className={styles.pronouns}>({pronouns})</i>
          <span className={styles.role}>{location}</span>
          <span className={styles.role}>{role}</span>
          <span className={styles.company}>@{company}</span>
          <div className={styles.social}>
            {github && (
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  width={24}
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </a>
            )}
            {twitter && (
              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={24}
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
            )}
            {linkedin && (
              <a
                href={`https://www.linkedin.com/in/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={24}
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>
            )}
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width={28}
                >
                  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
