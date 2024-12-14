/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete, Patch, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Card } from './card.model';
import { CreateCardDto } from './dto/create.catd.dto';
import { UpdateCardDto } from './dto/card.update.dto';
import { Board } from './board.model';
import { UpdateBoardDto } from './dto/board.dto';

@ApiTags("Boards")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  //BOARD CONTROLLER

  @ApiOperation({ summary: "Create Board" })
  @ApiResponse({ status: 201, type: Board })
  @Post("/board")
  async createBoard(@Body() board: UpdateBoardDto): Promise<Card> {
    return await this.appService.createBoard(board);
  }

  @ApiOperation({ summary: "Find All Board" })
  @ApiResponse({ status: 200, type: Board })
  @Get("/board")
  async findAllBoard(): Promise<Board[]> {
    return await this.appService.findAllBoards();
  }

  @ApiOperation({ summary: "Find Board by id" })
  @ApiResponse({ status: 200, type: Board })
  @Get("/board/:id")
  async findBoardId(@Param('id') id: string): Promise<Board> {
    return await this.appService.findBoardById(id);
  }

  @ApiOperation({ summary: "Find Board by name" })
  @ApiResponse({ status: 200, type: Board })
  @Get("/board-name/:name")
  async findBoardByName(@Param('name') name: string): Promise<Board> {
    return await this.appService.findBoardByName(name);
  }

  @ApiOperation({ summary: "Find All Board" })
  @ApiResponse({ status: 200, type: Board })
  @Patch("/board")
  async updateBoardName(@Body() board: UpdateBoardDto): Promise<Board> {
    return await this.appService.updateBoardName(board);
  }


  @ApiOperation({ summary: "Delete Board by id" })
  @ApiResponse({ status: 200, type: Board })
  @Delete("/delete-board/:id")
  async findAndDeleteBoardById(@Param('id') id: string): Promise<Board> {
    return await this.appService.findAndDeleteBoard(id);
  }

  // CARD CONTROLLERS

  @ApiOperation({ summary: "Create Card" })
  @ApiResponse({ status: 201, type: Card })
  @Post("/card")
  async createCard(@Body() card: CreateCardDto): Promise<Card> {
    return await this.appService.createCard(card);
  }

  @ApiOperation({ summary: "Find All Card" })
  @ApiResponse({ status: 200, type: Card })
  @Get("/card")
  async findAllCard(): Promise<any> {
    return await this.appService.findAllCards();
  }

  @ApiOperation({ summary: "Find Card by id" })
  @ApiResponse({ status: 200, type: Card })
  @Get("/card/:id")
  async findAllCardId(@Param('id') id: string): Promise<Card> {
    return await this.appService.findCardById(id);
  }

  @ApiOperation({ summary: "Find Card by title" })
  @ApiResponse({ status: 200, type: Card })
  @Get("/card-title/:title")
  async findCardByTitle(@Param('title') title: string): Promise<Card> {
    return await this.appService.findCardByTitle(title);
  }

  @ApiOperation({ summary: "Update Card" })
  @ApiResponse({ status: 200, type: Card })
  @Patch("/card")
  async updateCardName(@Body() card: UpdateCardDto): Promise<Card> {
    return await this.appService.updateCardName(card);
  }


  @ApiOperation({ summary: "Delete card by id" })
  @ApiResponse({ status: 200, type: Card })
  @Delete("/delete-card/:id")
  async findAndDeleteCardById(@Param('id') id: string): Promise<Card> {
    return await this.appService.findAndDeleteCard(id);
  }



}
