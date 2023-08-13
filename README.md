# Inspire Me Now - Random Quote Generator

Welcome to **Inspire Me Now**, a Dockerized Node.js application that generates random inspirational, motivational, funny, and life quotes. You can explore different quote categories, contribute your own quotes, and even enjoy Chuck Norris jokes.

## Features

- Get random quotes from categories like inspirational, motivational, funny, and life.
- Add your own quotes to enrich the collection.
- Chuck Norris jokes integration for extra humor.
- Built with Node.js, Express, and Docker for learning and practice.

## Getting Started

1. Clone the repository: `git clone https://github.com/imunreal7/inspire-me-now-app.git`
2. Navigate to the project directory: `cd inspire-me-now-app`
3. Install dependencies: `npm install`
4. Run the app locally: `npm start`

## Docker Usage

To run the app using Docker:

1. Build the Docker image: `docker build -t inspire-me-now .`
2. Run a Docker container: `docker run -p 3000:3000 inspire-me-now`
3. For convenient development with automatic code updates and interactive mode, you can use the following command:
`docker run -it -p 9001:3000 -v $(pwd)/app:/app inspire-me-now`
This command maps your local code directory to the container, allowing you to see instant updates while you develop.

Visit [http://localhost:3000](http://localhost:3000) to access the app.

## Contributing

Feel free to contribute by adding more quotes, enhancing features, or improving the documentation. Submit a pull request to share your changes.

## License

This project is licensed under the ISC License.

## Acknowledgements

- Quotes sourced from various authors and Chuck Norris jokes API.
- Developed for learning and practice with Docker.

---

Happy quoting! 🚀
