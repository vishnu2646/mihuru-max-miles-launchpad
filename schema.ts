import { z } from "zod";

export const loanApplicationSchema = z.object({
	firstName: z.string().min(1, "First Name is required"),
	lastName: z.string().min(1, "Last Name is required"),
	contactNumber: z.string().regex(/^[6-9]\d{9}$/, "Enter valid phone number"),
	email: z.string().email("Invalid email address"),
	travelAgencyName: z.string().min(1, "Travel Agency Name is required"),
	loanAmount: z
		.string()
		.min(1, "Loan amount is required")
		.refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
			message: "Loan amount must be a positive number",
		}),
	termsAccepted: z.literal(true, {
		errorMap: () => ({
			message: "You must accept the terms and conditions",
		}),
	}),
});
