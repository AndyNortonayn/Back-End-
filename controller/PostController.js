const Post = require ("../model/Post.js");
const PostService = require ("../service/PostService")

class PostController{
    async create (req, res){
        try{
            console.log('cqwcqwqq')
            const post = await PostService.create(req.body)
            res.json(post)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getAll (req, res){
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getOne (req, res){
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post)
        } catch (e){
            res.status(500).json(e)
        }
    }
    async update (req, res){
        try {
            const updatePost = await PostService.update(req.body);
            return res.json(updatePost);
        }catch (e){
            res.status(500).json(e.message)
        }
    }
    async delate (req, res){
        try {
            console.log(1)
            const post =  await  PostService.delate(req.params.id);
            console.log(2)
            return res.json(post)
        }catch (e){
            console.log(3)
            res.status(500).json(e)
        }
    }
}

module.exports = new PostController();