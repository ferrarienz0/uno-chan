import { Schema, model } from 'mongoose';

import { IPlayerDocument } from '../../ts/interface/IPlayer';

const PlayerSchema: Schema = new Schema(
  {
    tag: {
      type: String,
      required: true
    },
    hand: [
      {
        type: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Card'
          }
        ],
        validate: [maxLineSize, `{PATH}: exceeds the limit of 4`]
      }
    ]
  },
  {
    timestamps: true
  }
);

function maxLineSize(value: any[]) {
  return value.length <= 4;
}

export default model<IPlayerDocument>('Player', PlayerSchema);
