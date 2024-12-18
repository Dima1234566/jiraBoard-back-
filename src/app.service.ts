/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Card } from './card.model';
import { Board } from './board.model';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateBoardDto } from './dto/board.dto';
import { CreateCardDto } from './dto/create.catd.dto';
import { title } from 'process';
import { UpdateCardDto } from './dto/card.update.dto';

@Injectable()
export class AppService {


  constructor(

    @InjectModel(Board.name) private boardModel: Board,

    @InjectModel(Card.name) private cardModel: Card,


  ) { }
  // BOARD SERVICES
  async createBoard(board: UpdateBoardDto) {
    try {
      if (!board) {
        return console.log("Board not exist");
      }

      const { name } = board;
      const lowerCaseName = name.toLocaleLowerCase();
      const findName = await this.boardModel.findOne({
        name: lowerCaseName
      })
      if (!findName) {
        const createBoard = await this.boardModel.create({
          name: lowerCaseName,
        })

        return createBoard;
      } else {
        console.log("this board name exist");
      }
    } catch (error) {
      console.error(error);
    }

  }


  async findAllBoards() {
    try {
      return await this.boardModel.find();

    } catch (error) {
      console.error(error);
    }
  }

  async findBoardById(id: string) {
    try {

      return await this.boardModel.findById(id)

    } catch (error) {
      console.error(error);
    }
  }


  async findBoardByName(name: string) {
    try {
      return await this.boardModel.findOne({
        name: name
      })

    } catch (error) {
      console.error(error);
    }
  }

  async updateBoardName(board: UpdateBoardDto) {
    try {
      const { name, id } = board;
      return await this.boardModel.findByIdAndUpdate(id, {
        name: name
      })
    } catch (error) {
      console.error(error);
    }
  }


  async findAndDeleteBoard(id: string) {
    try {
      return await this.boardModel.findByIdAndDelete(id)
    } catch (error) {
      console.error(error);
    }
  }

  //CARD SERVICES

  async createCard(card: CreateCardDto) {
    try {
      if (!card) {
        return console.log("Board not exist");
      }
      if (card.title) {
        const createCard = await this.cardModel.create({
          ...card
        })
        return createCard;
      } else {
        console.log("Title don`t exist");
      }
    } catch (error) {
      console.error(error);
    }

  }


  async findAllCards() {
    try {
      return await this.cardModel.find();

    } catch (error) {
      console.error(error);
    }
  }

  async findCardById(id: string) {
    try {

      return await this.cardModel.findById(id)

    } catch (error) {
      console.error(error);
    }
  }


  async findCardByTitle(title: string) {
    try {
      return await this.cardModel.findOne({
        title: title
      })

    } catch (error) {
      console.error(error);
    }
  }

  async updateCardName(card: UpdateCardDto) {
    try {
      await this.cardModel.findByIdAndUpdate(card.id, {
        ...card
      })
      return await this.cardModel.findById(card.id)
    } catch (error) {
      console.error(error);
    }
  }


  async findAndDeleteCard(id: string) {
    try {
      return await this.cardModel.findByIdAndDelete(id)
    } catch (error) {
      console.error(error);
    }
  }



  async findCardBoardById(id: string) {
    try {
      return await this.cardModel.find({
        board: id
      })

    } catch (error) {
      console.error(error);
    }
  }

}


