const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

const flattenPlaylists = (array) => {
  let result = [];
  if (!Array.isArray(array)) {
    return [];
  }
  for (let i = 0; i < array.length; i++) {
    const playlist = array[i];
    for (let j = 0; j < array[i].length; j++) {
      const track = playlist[j];
      let newTrack = {
        ...track,
        source: [i, j],
      };
      result.push(newTrack);
    }
  }
  return result;
};

const scoreTracks = (track) => {
  let result = [];
  for (let i = 0; i < track.length; i++) {
    const playlist = track[i];
    const votes = playlist.votes;
    const bpm = playlist.bpm;
    const score = votes * 10 - Math.abs(bpm - 120);
    playlist.score = score;
    result.push(playlist);
  }
  return result;
};

const dedupeTracks = (tracks) => {
  let result = [];
  let seenIds = [];
  for (let i = 0; i < tracks.length; i++) {
    let newTracks = tracks[i];
    if (!seenIds.includes(newTracks.trackId)) {
      seenIds.push(newTracks.trackId);
      result.push(newTracks);
    }
  }
  return result;
};

const enforceArtistQuota = (tracks, maxPerArtist) => {
  let result = [];
  let track = {};
  for (let i = 0; i < tracks.length; i++) {
    let playlist = tracks[i];
    if (track[playlist.artist] === undefined) {
      track[playlist.artist] = 0;
    }
    if (track[playlist.artist] < maxPerArtist) {
      track[playlist.artist] += 1;
      result.push(playlist);
    }
  }
  return result;
};

const buildSchedule = (tracks) => {
  let result = [];
  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const count = {
      slot: i + 1,
      trackId: track.trackId,
    };
    result.push(count);
  }
  return result;
};

const remixPlaylist = (playlists, maxPerArtist) => {
  let step1 = flattenPlaylists(playlists);
  let step2 = scoreTracks(step1);
  let step3 = dedupeTracks(step2);
  let step4 = enforceArtistQuota(step3, maxPerArtist);
  let step5 = buildSchedule(step4);
  return step5;
};
