"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons";

interface GithubUser {
  followers: number;
  public_repos: number;
}

const Hero = () => {
  const [githubData, setGithubData] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/whereisbilal")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        return res.json();
      })
      .then((data: GithubUser) => setGithubData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-5 py-15 font-mono">
      <div className="flex flex-col items-start gap-6">
        {/* Profile Image */}
        <img
          src="/Home_Img/bg10.png"
          alt="Muhammad Bilal"
          className="w-32 h-32 rounded-full border border-gray-300 object-cover"
        />

        {/* Name */}
        <h1 className="text-4xl font-bold text-black">
          Muhammad Bilal
        </h1>

        {/* Role */}
        <p className="text-lg text-gray-600">
          Frontend Developer | learning Full-Stack Development
        </p>

        {/* About */}
        <p className="max-w-3xl leading-8 text-gray-700">
          I'm a Frontend Developer learning Full-Stack Development. I enjoy building modern web applications and improving my skills through practical projects.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-xl text-gray-600">
          <a
            href="https://github.com/whereisbilal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/whereisbilal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://x.com/whereisbilal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-black transition"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>

        {/* Resume Buttons */}
        <div className="mt-2 flex flex-wrap items-center gap-4">
          {/* View Resume */}
          <a
            href="https://imresume.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-black px-5 py-3 text-black transition hover:bg-black hover:text-white"
          >
            <FontAwesomeIcon icon={faEye} />
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href="/Muhammad Bilal _ Developer Portfolio.pdf"
            download="Muhammad Bilal _ Developer Portfolio.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-800"
          >
            <FontAwesomeIcon icon={faDownload} />
            Download Resume
          </a>
        </div>

        {/* Activity Section */}
        <div className="mt-14 w-full">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-black">
            ACTIVITY
          </h2>

          {githubData && (
            <p className="flex items-center gap-2 text-gray-600">
              <FontAwesomeIcon icon={faGithub} />
              <span>{githubData.public_repos} Repositories</span>
            </p>
          )}

          <p className="mb-6 mt-5 text-gray-600">
            GitHub contributions over the last year.
          </p>

          <div className="w-full overflow-x-auto">
            <div className="flex min-w-max justify-center">
              <GitHubCalendar
                username="whereisbilal"
                colorScheme="light"
                fontSize={14}
                blockSize={12}
                blockMargin={4}
                theme={{
                  light: [
                    "#ebedf0",
                    "#d1d5db",
                    "#9ca3af",
                    "#6b7280",
                    "#1f2937",
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;