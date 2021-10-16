import express from "express";
import { watch, upload, deleteVideo, getEdit, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

// videoRouter.get("/upload", upload); // 반드시 id 보다 위에 있어야함. id 밑으로 가면 upload를 id로 인식해버림; // 아래 url에 숫자만 받도록 제한해서 옮겨도 괜찮음
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

export default videoRouter;