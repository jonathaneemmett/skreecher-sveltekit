import mongoose from 'mongoose';
const { Schema } = mongoose;

const skreechSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		content: {
			type: String
		},
		time: {
			type: String
		},
		replies: {
			type: Number
		},
		reSkreeches: {
			type: Number
		},
		likes: {
			type: Number
		}
	},
	{
		timestamps: true
	}
);

export default mongoose.model('Skreech', skreechSchema);
