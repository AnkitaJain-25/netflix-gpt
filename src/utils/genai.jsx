import { GoogleGenAI } from "@google/genai";
import { GENAI_KEY } from "./constants";

const genai = new GoogleGenAI({ apiKey: GENAI_KEY });

export default genai;
