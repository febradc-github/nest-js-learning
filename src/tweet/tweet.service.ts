import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
  constructor(private readonly usersService: UsersService) {}

tweets: {
    text: string,
    date: Date,
    userId: number
}[] = [
    { text: "Hello world!", date: new Date('2024-06-01T10:00:00Z'), userId: 1 },
    { text: "NestJS is awesome!", date: new Date('2024-06-02T12:30:00Z'), userId: 2 },
    { text: "TypeScript makes coding fun.", date: new Date('2024-06-03T15:45:00Z'), userId: 1 },
    { text: "Learning new frameworks.", date: new Date('2024-06-04T09:20:00Z'), userId: 3 },
    { text: "Tweet service working!", date: new Date('2024-06-05T18:10:00Z'), userId: 2 }
];

  getTweetsByUserId(userId: number) {
    const user = this.usersService.getUserById(userId);
    const tweets = this.tweets.filter(tweet => tweet.userId === userId);
    const response = tweets.map(tweet => {
      return {
        text: tweet.text,
        date: tweet.date,
        user: user
      }
    })
    return response;
  }
}
