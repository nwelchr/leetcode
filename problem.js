function canAttendMeetings(intervals) {
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
}

function minMeetingRooms(intervals) {
  if (intervals.length === 0) return 0;

  let startTimes = intervals.map((interval) => interval[0]);
  let endTimes = intervals.map((interval) => interval[1]);

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  let start = 0;
  let end = 0;
  let rooms = 0;
  let maxRooms = 0;

  while (start < intervals.length) {
    if (startTimes[start] < endTimes[end]) {
      rooms++;
      start++;
    } else {
      rooms--;
      end++;
    }

    maxRooms = Math.max(maxRooms, rooms);
  }

  return maxRooms;
}

function findAvailableTimeSlots(intervals, workingHours) {
  if (!intervals.length) {
    return workingHours;
  }

  let availableTimeSlots = [];

  const [workStart, workEnd] = workingHours;

  // determine time before first interval
  const first = intervals[0][0];
  if (first > workStart) {
    availableTimeSlots.push([workStart, first]);
  }

  // determine gaps
  for (let i = 0; i < intervals.length - 1; i++) {
    const currEnd = intervals[i][1];
    const nextStart = intervals[i + 1][0];
    if (nextStart > currEnd) availableTimeSlots.push([currEnd, nextStart]);
  }

  // determine time after last interval
  const last = intervals[intervals.length - 1][1];
  if (last < workEnd) {
    availableTimeSlots.push([last, workEnd]);
  }

  return availableTimeSlots;
}

function scheduleNewMeeting(intervals, workingHours, meetingDuration) {
  const availableTimeSlots = findAvailableTimeSlots(intervals, workingHours);

  console.log({ meetingDuration, workingHours });

  for (const slot of availableTimeSlots) {
    console.log({ slot });
  }
}

// Test Cases
console.log(
  scheduleNewMeeting(
    [
      [9, 10],
      [12, 13],
      [16, 18],
    ],
    [9, 18],
    1
  )
); // Expected output: [10, 11]
console.log(
  scheduleNewMeeting(
    [
      [9, 12],
      [14, 17],
    ],
    [9, 18],
    2
  )
); // Expected output: [12, 14]
console.log(scheduleNewMeeting([[9, 10]], [9, 18], 7)); // Expected output: []
console.log(scheduleNewMeeting([], [9, 18], 2)); // Expected output: [9, 11]
