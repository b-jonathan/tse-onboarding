import { body } from "express-validator";

const makeNameValidator = () =>
  body("name")
    .exists()
    .withMessage("name is required")
    .bail()
    .isString()
    .withMessage("name must be a string")
    .bail()
    .notEmpty()
    .withMessage("name cannot be empty");
const makeProfilePictureURLValidator = () =>
  body("profilePictureURL")
    // order matters for the validation chain - by marking this field as optional, the rest of
    // the chain will only be evaluated if it exists
    .optional()
    .isString()
    .withMessage("Profile Picture URL must be a string");

export const createUser = [makeNameValidator(), makeProfilePictureURLValidator()];
