const Post = require ("../model/Post");
const cron = require("node-cron");
const PostController = require("../controller/PostController");

class PostService{
    async create (post) {
        cron.schedule('* * * * *', async () => {
            console.log('work')
            const createdPost = await Post.create(post)
            return createdPost;
        })

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
        const post =  await Post.findByIdAndDelete(id);
        return post;


    }
}

module.exports = new PostService();