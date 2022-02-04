import Router from "express";
import {
  post_all,
  post_list,
  post_user_list,
  post_user_likes_list,
  post_one,
  post_add,
  post_comment,
  post_comment_delete,
  post_update,
  post_delete,
  post_like,
  post_dislike,
  comment_like,
} from "../controllers/post.js";
import auth from "../middleware/auth.js";

const router = Router();

/* post end points */
/* GET */
router.get("/", post_all);                                    // all posts
router.get("/:page", post_list);                              // posts per page
router.get("/user/:userId", post_user_list);                  // posts per user
router.get("/posts/:userId", post_user_likes_list);           // posts liked by user
router.get("/post/:postId", post_one);                        // post by id
/* POST */
router.post("/", auth, post_add);                             // add post
router.post("/comment", auth, post_comment);                  // add post comment
router.post("/like/:postId", auth, post_like);                // add like post
router.post("/dislike/:postId", auth, post_dislike);          // add dislike post
router.post("/comment/like/:commentId", auth, comment_like);  // add like comment
/* PUT */
router.put("/:postId", auth, post_update);                    // update post
router.put("/comment/:commentId", auth, post_comment_delete); // update post comment
/* DELETE */
router.delete("/:postId", auth, post_delete);                 // delete post

export default router;
