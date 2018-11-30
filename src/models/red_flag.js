import moment from 'moment';
import uuid from 'uuid';

class Red_Flag {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.Red_Flags = [];
  }
  /**
   * 
   * @returns {object} Red_Flag object
   */
  create(data) {
    const newRed_Flag = {
      id: uuid.v4(),
      success: data.success || '',
      lowPoint: data.lowPoint || '',
      takeAway: data.takeAway || '',
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };

    const newUser = {
      "id" : Integer ,
      "firstname" : String ,
      "lastname" : String ,
      "othernames" : String ,
      "email" : String ,
      "phoneNumber" : String,
      "username" : String ,
      "registered" : Date ,
      "isAdmin" : Boolean ,
      createdDate: moment.now(),
      modifiedDate: moment.now()
    }


    const newIncident = {
      "id" : Integer ,
      "createdOn" : Date ,
      "createdBy" : Integer , // represents the user who created this record
      "type" : String , // [red-flag, intervention]
      "location" : String , // Lat Long coordinates
      "status" : String , // [draft, under investigation, resolved, rejected]
      "Images" : [Image, Image] ,
      "Videos" : [Image, Image] ,
      "comment" : String
      createdDate: moment.now(),
      modifiedDate: moment.now()
    }





    this.Red_Flags.push(newRed_Flag, newUser, newIncident );
    return newRed_Flag
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} Red_Flag object
   */
  findOne(id) {
    return this.Red_Flags.find(red_flag => red_flag.id === id);
  }
  /**
   * @returns {object} returns all Red_Flags
   */
  findAll() {
    return this.Red_Flags;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const Red_Flag = this.findOne(id);
    const index = this.Red_Flags.indexOf(Red_Flag);
    this.Red_Flags[index].success = data['success'] || Red_Flag.success;
    this.Red_Flags[index].lowPoint = data['lowPoint'] || Red_Flag.lowPoint;
    
    this.Red_Flags[index]."id" = data['id'] || Red_Flag.'id';
    this.Red_Flags[index]."firstname" = data['firstname'] || Red_Flag.'firstname';
    this.Red_Flags[index]."lastname" = data['lastname'] || Red_Flag.'lastname';
    this.Red_Flags[index]."othernames" = data['othernames'] || Red_Flag.'othernames';
    this.Red_Flags[index]."email" = data['email'] || Red_Flag.'email';
    this.Red_Flags[index]."phoneNumber" = data['phoneNumber'] || Red_Flag.'phoneNumber';
    this.Red_Flags[index]. "username" = data['username'] || Red_Flag.'username';
    this.Red_Flags[index]. "registered" = data['registered'] || Red_Flag.'registered';
    this.Red_Flags[index]. "isAdmin" = data['isAdmin'] || Red_Flag.'isAdmin';


    this.Red_Flags[index]."createdOn" = data['createdOn'] || Red_Flag.'createdOn';
    this.Red_Flags[index]."createdBy" = data['createdby'] || Red_Flag.'createdBy';
    this.Red_Flags[index]."type" = data['type'] || Red_Flag.'type';
    this.Red_Flags[index]."location" = data['location'] || Red_Flag.'location';
    this.Red_Flags[index]."status" = data['status'] || Red_Flag.'status';
    this.Red_Flags[index]."Images" = data['Images'] || Red_Flag.'Images';
    this.Red_Flags[index]."Videos" = data['Videos'] || Red_Flag.'Videos';
    this.Red_Flags[index]."comment" = data['comment'] || Red_Flag.'comment';






    


    



    this.Red_Flags[index].modifiedDate = moment.now()
    return this.Red_Flags[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const Red_Flag = this.findOne(id);
    const index = this.Red_Flags.indexOf(Red_Flag);
    this.Red_Flags.splice(index, 1);
    return {};
  }
}
export default new Red_Flag();