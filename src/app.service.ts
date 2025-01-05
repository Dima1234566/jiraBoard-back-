/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Card } from './card.model';
import { Board } from './board.model';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateBoardDto } from './dto/board.dto';
import { CreateCardDto } from './dto/create.catd.dto';
import { UpdateCardDto } from './dto/card.update.dto';
import { totalmem } from 'os';

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


  async findAllBoards(query?: any): Promise<{ totalPages: number; currentPage: number; totalItem: number; data: Board[] }> {
    try {
      const { name, page, size } = query;
      const currentPage = page || 1;
      const sizeOfItems = size || 6;
      const totalCount = await this.boardModel.countDocuments() || 0;
      const totalPages = Math.ceil(totalCount / sizeOfItems);
      const offSet = (currentPage - 1) * sizeOfItems;
      if (!name) {
        const res = await this.boardModel.find().limit(sizeOfItems).skip(offSet);
        return { totalPages: totalPages, currentPage: currentPage, totalItem: totalCount, data: res }
      } else {
        const reg = new RegExp(name, "i")
        const res = await this.boardModel.find({ name: { $regex: reg } }).limit(sizeOfItems).skip(offSet);
        return { totalPages: totalPages, currentPage: currentPage, totalItem: totalCount, data: res }

      }
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


