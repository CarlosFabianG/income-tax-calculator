# App Setup

## Local Development Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Create Environment Variables**:
   - Create a file named `.env.local` in the root of the project.
   - Add the following line to the `.env.local` file:
     ```
     REACT_APP_API_URL=<your_api_url>
     ```
   - Replace `<your_api_url>` with the actual API URL you will be using for local development.

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```
   - The app will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   - The page will reload if you make edits, and you will see any lint errors in the console.

## Production Setup

1. **Build the Application**:
   - Ensure your `.env` file is set up with the production API URL:
     ```
     REACT_APP_API_URL=<your_production_api_url>
     ```
   - Replace `<your_production_api_url>` with the actual API URL for production.
   - Run the following command to build the app:
   ```bash
   npm run build
   ```

2. **Deploy the Build**:
   - The build will be generated in the `build` folder. You can deploy this folder to any static file server or hosting service (e.g., Netlify, Vercel, AWS S3).
   - Ensure that your server is configured to serve the static files from the `build` directory.

3. **Access the Application**:
   - Once deployed, access your application via the URL provided by your hosting service.

## Additional Information

- For more details on running tests, refer to the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests).
- For deployment specifics, see the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment).


