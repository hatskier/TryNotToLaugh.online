import { Model } from 'radiks'

class BlockgagPost extends Model {
  static className = 'BlockgagPost';

  static schema = {
    originalUrl: {
      type: Boolean,
      decrypted: true,
    },
    description: {
      type: String,
      decrypted: true,
    },
    type: {
      type: String, // enum: ['img', 'video', 'gif']
      decrypted: true,
    },
    imgGaiaPublicUrl: {
      type: String,
      decrypted: true,
    },
    tags: {
      type: Array,
      decrypted: true,
    }
  }

  static defaults = {
    type: 'img'
  }
}

export default BlockgagPost
