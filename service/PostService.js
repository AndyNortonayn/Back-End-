const Post = require ("../model/Post");
const filleService = require("../service/fileService")

class PostService{
    async create (post, picture) {
        const fileName = filleService.saveFile(picture)
        const createdPost = await Post.create({...post, picture: fileName})
        return createdPost;

    }
    async getAll (){
        const posts = await Post.find();
        return posts;

    }
    async getOne (id){
        if(!id) {
            throw new Error('Id не указан')
        }
        const post = await Post.findById(id);
        return post;

    }
    async update (post){
        if(!post._id){
            throw new Error('Id не указан')
        }
        const updatePost = await Post.findByIdAndUpdate(post._id, post, {new:true})
        return updatePost;
    }
    async delate (id){
        if(!id){
            throw new Error({message:'Id не указан'})
        }
        const post =  await  Post.findByIdAndDelete(id);
        return post;


    }
}

module.exports = new PostService();