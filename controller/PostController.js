const Post = require ("../model/Post.js");

class PostController{
    async create (req, res){
        try{
            const {title, content} = req.body
            console.log(req.body)
            const post = await Post.create({title, content})
            res.json(post)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getAll (req, res){
        try {
            const posts = await Post.find();
            return res.json(posts)
        }catch (e){
            res.status(500).json
        }
    }
    async getOne (req, res){
        try {
            const{id}=req.params
            if(!id){
                res.status(400).json({message:'Id не указан'})
            }
            const post = await Post.findById(id);
            return res.json(post)
        }catch (e){
            res.status(500).json
        }
    }
    async update (req, res){
        try {
            const post = req.body
            if(!post._id){
                req.status.json({message:'Id не указан'})
            }
            const updatePost = await Post.findByIdAndUpdate(post._id, post, {new:true})
            return res.json(updatePost);
        }catch (e){
            res.status(500).json
        }
    }
    async delate (req, res){
        try {
            const {id} = req.params
            console.log(req.params)
            if(!id){
                req.status.json({message:'Id не указан'})
            }
            const post =  await  Post.findByIdAndDelete(id);
            return res.json(post)
        }catch (e){
            res.status(500).json
        }
    }
}

module.exports = new PostController();