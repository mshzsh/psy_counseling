import React from "react";

const jsonCalendar = [
  {
    day_number: 0,
    day_name: "شنبه",
    timetable: [
      { id: 1, time: "08:00-15:00", status: true },
      { id: 2, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/09/28",
    date: "2022-11-19",
  },
  {
    day_number: 1,
    day_name: "یکشنبه",
    timetable: [
      { id: 3, time: "08:00-15:00", status: true },
      { id: 4, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/09/29",
    date: "2022-11-20",
  },
  {
    day_number: 2,
    day_name: "دوشنبه",
    timetable: [
      { id: 5, time: "08:00-15:00", status: true },
      { id: 6, time: "15:00-22:00", status: true },
    ],
    jalali_date: "1401/09/30",
    date: "2022-11-21",
  },
  {
    day_number: 3,
    day_name: "سه‌شنبه",
    timetable: [
      { id: 7, time: "08:00-15:00", status: true },
      { id: 8, time: "15:00-22:00", status: true },
    ],
    jalali_date: "1401/10/01",
    date: "2022-11-22",
  },
  {
    day_number: 4,
    day_name: "چهارشنبه",
    timetable: [
      { id: 9, time: "08:00-15:00", status: false },
      { id: 10, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/02",
    date: "2022-11-23",
  },
  {
    day_number: 5,
    day_name: "پنجشنبه",
    timetable: [
      { id: 11, time: "08:00-15:00", status: false },
      { id: 12, time: "15:00-22:00", status: true },
    ],
    jalali_date: "1401/10/03",
    date: "2022-11-24",
  },
  {
    day_number: 6,
    day_name: "جمعه",
    timetable: [
      { id: 13, time: "08:00-15:00", status: false },
      { id: 14, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/04",
    date: "2022-11-25",
  },
  {
    day_number: 0,
    day_name: "شنبه",
    timetable: [
      { id: 111, time: "08:00-15:00", status: true },
      { id: 112, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/05",
    date: "2022-11-26",
  },
  {
    day_number: 1,
    day_name: "یکشنبه",
    timetable: [
      { id: 1113, time: "08:00-15:00", status: true },
      { id: 1114, time: "15:00-22:00", status: true },
    ],
    jalali_date: "1401/10/06",
    date: "2022-11-27",
  },
  {
    day_number: 2,
    day_name: "دوشنبه",
    timetable: [
      { id: 115, time: "08:00-15:00", status: false },
      { id: 116, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/07",
    date: "2022-11-28",
  },
  {
    day_number: 3,
    day_name: "سه‌شنبه",
    timetable: [
      { id: 1117, time: "08:00-15:00", status: false },
      { id: 1118, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/08",
    date: "2022-11-29",
  },
  {
    day_number: 4,
    day_name: "چهارشنبه",
    timetable: [
      { id: 1119, time: "08:00-15:00", status: false },
      { id: 110, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/09",
    date: "2022-11-30",
  },
  {
    day_number: 5,
    day_name: "پنجشنبه",
    timetable: [
      { id: 1111, time: "08:00-15:00", status: false },
      { id: 1232, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/10",
    date: "2022-12-01",
  },
  {
    day_number: 6,
    day_name: "جمعه",
    timetable: [
      { id: 1333, time: "08:00-15:00", status: false },
      { id: 1444, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/11",
    date: "2022-12-02",
  },
  {
    day_number: 0,
    day_name: "شنبه",
    timetable: [
      { id: 1121, time: "08:00-15:00", status: false },
      { id: 223123, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/12",
    date: "2022-12-03",
  },
  {
    day_number: 1,
    day_name: "یکشنبه",
    timetable: [
      { id: 313123, time: "08:00-15:00", status: false },
      { id: 41231, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/13",
    date: "2022-12-04",
  },
  {
    day_number: 2,
    day_name: "دوشنبه",
    timetable: [
      { id: 51231, time: "08:00-15:00", status: false },
      { id: 6113, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/14",
    date: "2022-12-05",
  },
  {
    day_number: 3,
    day_name: "سه‌شنبه",
    timetable: [
      { id: 713, time: "08:00-15:00", status: false },
      { id: 8123, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/15",
    date: "2022-12-06",
  },
  {
    day_number: 4,
    day_name: "چهارشنبه",
    timetable: [
      { id: 9321, time: "08:00-15:00", status: false },
      { id: 1013, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/16",
    date: "2022-12-07",
  },
  {
    day_number: 5,
    day_name: "پنجشنبه",
    timetable: [
      { id: 12311, time: "08:00-15:00", status: false },
      { id: 11232, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/17",
    date: "2022-12-08",
  },
  {
    day_number: 6,
    day_name: "جمعه",
    timetable: [
      { id: 12313, time: "08:00-15:00", status: false },
      { id: 11234, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/18",
    date: "2022-12-09",
  },
  {
    day_number: 0,
    day_name: "شنبه",
    timetable: [
      { id: 1131, time: "08:00-15:00", status: false },
      { id: 2132, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/19",
    date: "2022-12-10",
  },
  {
    day_number: 1,
    day_name: "یکشنبه",
    timetable: [
      { id: 3123, time: "08:00-15:00", status: false },
      { id: 4123, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/20",
    date: "2022-12-11",
  },
  {
    day_number: 2,
    day_name: "دوشنبه",
    timetable: [
      { id: 5123, time: "08:00-15:00", status: false },
      { id: 6123, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/21",
    date: "2022-12-12",
  },
  {
    day_number: 3,
    day_name: "سه‌شنبه",
    timetable: [
      { id: 7123, time: "08:00-15:00", status: false },
      { id: 8123, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/22",
    date: "2022-12-13",
  },
  {
    day_number: 4,
    day_name: "چهارشنبه",
    timetable: [
      { id: 912, time: "08:00-15:00", status: false },
      { id: 11230, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/23",
    date: "2022-12-14",
  },
  {
    day_number: 5,
    day_name: "پنجشنبه",
    timetable: [
      { id: 12311, time: "08:00-15:00", status: false },
      { id: 11232, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/24",
    date: "2022-12-15",
  },
  {
    day_number: 6,
    day_name: "جمعه",
    timetable: [
      { id: 11233, time: "08:00-15:00", status: false },
      { id: 11234, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/25",
    date: "2022-12-16",
  },
  {
    day_number: 0,
    day_name: "شنبه",
    timetable: [
      { id: 1123, time: "08:00-15:00", status: false },
      { id: 2123, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/26",
    date: "2022-12-17",
  },
  {
    day_number: 1,
    day_name: "یکشنبه",
    timetable: [
      { id: 1233, time: "08:00-15:00", status: false },
      { id: 1324, time: "15:00-22:00", status: false },
    ],
    jalali_date: "1401/10/27",
    date: "2022-12-18",
  },
];

export default jsonCalendar;
