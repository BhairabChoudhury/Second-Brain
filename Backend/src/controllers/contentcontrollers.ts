import { Request, Response } from "express";
//import * as contentService from "../services/content.service";

// ➕ Create Content
export const createContent = async (req: Request, res: Response) => {
  try {
    const { title, type, content, url } = req.body;

    const file = (req as any).file; // for pdf/image

    const newContent = await contentService.createContent({
      title,
      type,
      content,
      url,
      file,
      userId: (req as any).user?.id // from auth middleware
    });

    res.status(201).json({
      success: true,
      data: newContent
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// 🔍 Get All Content
export const getAllContent = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id;

    const contents = await contentService.getAllContent(userId);

    res.status(200).json({
      success: true,
      data: contents
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ❌ Delete Content
export const deleteContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await contentService.deleteContent(id);

    res.status(200).json({
      success: true,
      message: "Content deleted"
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};