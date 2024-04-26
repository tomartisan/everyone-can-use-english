type TranscriptionType = {
  id: string;
  targetId: string;
  targetType: string;
  targetMd5?: string;
  state: "pending" | "processing" | "finished";
  engine: string;
  model: string;
  result: AlignmentResult & { original?: string };
};

type TranscriptionResultSegmentType = {
  offsets: {
    from: number;
    to: number;
  };
  text: string;
  timestamps: {
    from: string;
    to: string;
  };
};

type TranscriptionResultSegmentGroupType = TranscriptionResultSegmentType & {
  segments: TranscriptionResultSegmentType[];
};
