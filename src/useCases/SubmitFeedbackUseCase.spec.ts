import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase";

let submitFeedback: SubmitFeedbackUseCase;


const sendMailSpy = jest.fn();
const createFeedbackSpy = jest.fn();
// escuta se a funçaõ foi chamada 

describe("Submit Feedback", () => {
  beforeEach(() => {
    submitFeedback = new SubmitFeedbackUseCase(
      { create: createFeedbackSpy },
      { sendMail: sendMailSpy }
    );
  });

  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "examples comment",
        screenshot: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABVYAAAKR",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  });

  it("should not be able to submit a feedback whithout type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "examples comment",
        screenshot: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABVYAAAKR",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback whithout comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "aaaaa",
        comment: "",
        screenshot: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABVYAAAKR",
      })
    ).rejects.toThrow();
  });



  it("should not be able to submit a feedback whithout screnshot invalid", async () => {
    await expect(
      submitFeedback.execute({
        type: "aaaaa",
        comment: "aaaaa",
        screenshot: "data,jpg",
      })
    ).rejects.toThrow();
  });



});
