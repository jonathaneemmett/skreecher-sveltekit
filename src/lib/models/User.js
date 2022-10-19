import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: {
			type: String
		},
		email: {
			type: String
		},
		password: {
			type: String
		},
		handle: {
			type: String
		},
		avatar: {
			type: String,
			default: 'https://via.placeholder.com/150/150'
		},
		token: {
			type: String
		}
	},
	{
		timestamps: true
	}
);

export default mongoose.model('User', userSchema);
