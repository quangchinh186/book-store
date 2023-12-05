const MemberProfile = require('../schema/Member');

class Member {
  static async getMemberInfomation(req, res) {
    try {
      const id = req.params.id;
      const members = await MemberProfile.findById(id);
      if (!members) {
        return res.status(404).send('Member not found');
      }
      res.json(members);
    } catch (error) {
      res.json(error);
    }
  }

  static async createMember(req, res) {
    try {
      const member = new MemberProfile(req.body);
      await member.save();
      res.json(member);
    } catch (error) {
      res.json(error);
    }
  }
  
  static async changeProfile(req, res) {
    try {
      const member = req.body;
      const id = req.params.id;
      const result = await MemberProfile.findByIdAndUpdate(id, member);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }

  static async getRentalPlan(req, res) {
    try {
      const id = req.params.id;
      const member = await MemberProfile.findById(id);
      if (!member) {
        return res.status(404).send('Member not found');
      }
      res.json(member.rentalPlan);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = Member;