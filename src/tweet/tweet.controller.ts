
import { Controller, ParseIntPipe } from '@nestjs/common';
import { Body, Param } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Get('{:userid}')
  getTweetsByUserId(
    @Param('userid', ParseIntPipe) userId: number
  ) {
    return this.tweetService.getTweetsByUserId(userId);
  }
}
