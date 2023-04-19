import type { Config } from "prismic-ts-codegen";
import dotenv from 'dotenv'

dotenv.config({ path: '.env.development' })

const config: Config = {
  output: "./types.generated.ts",
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    customTypesAPIToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
    models: {
        fetchFromRepository: true,
    },
    clientIntegration: {
      includeCreateClientInterface: false,
    },
};

export default config;
