import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../FeedbacksRepository";

export  class PrismaFeedbacksRepository implements FeedbacksRepository {
     async create(data: FeedbackCreateData)  {
        const { type , comment , screenshot} = data;
  
        const feedeback =  await  prisma.feedback.create({
        data: {
          comment,
          type,
          screenshot
        }})
    };

}