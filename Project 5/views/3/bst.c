/*
 * This file is where you should implement your binary search tree.  It already
 * contains skeletons of the functions you need to implement (along with
 * documentation for each function).  Feel free to implement any additional
 * functions you might need.  Also, don't forget to include your name and
 * @oregonstate.edu email address below.
 *
 * Name: Ramish Mohammad 
 * Email: mohammar@oregonstate.edu
 */
#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

#include "bst.h"

/*
 * This structure represents a single node in a BST.  In addition to containing
 * pointers to its two child nodes (i.e. `left` and `right`), it contains two
 * fields representing the data stored at this node.  The `key` field is an
 * integer value that should be used as an identifier for the data in this
 * node.  Nodes in the BST should be ordered based on this `key` field.  The
 * `value` field stores data associated with the key.
 *
 * You should not modify this structure.
 */
struct bst_node
{
  int key;
  void* value;
  struct bst_node* left;
  struct bst_node* right;
};


/*
 * This structure represents an entire BST.  It specifically contains a
 * reference to the root node of the tree.
 *
 * You should not modify this structure.
 */
struct bst
{
  struct bst_node* root;
};

/*
 * This function should allocate and initialize a new, empty, BST and return
 * a pointer to it.
 */
struct bst* bst_create()
{
  struct bst* tree = malloc(sizeof(struct bst));
  tree->root = NULL;
}

/*
 * This function should free the memory associated with a BST.  While this
 * function should up all memory used in the BST itself, it should not free
 * any memory allocated to the pointer values stored in the BST.  This is the
 * responsibility of the caller.
 *
 * Params:
 *   bst - the BST to be destroyed.  May not be NULL.
 */


void bst_free(struct bst* bst)
{
    free(bst);
}


/*
Tree length finder function 
*/

int length(struct bst_node* tree)
{
    int a;
    if(tree == NULL)
    {
        return 0;
    }
    else 
    {
        a = 1 + length(tree->left) + length(tree -> right);
        return a;
    }
}
/*
 * This function should return the total number of elements stored in a given
 * BST.
 *
 * Params:
 *   bst - the BST whose elements are to be counted.  May not be NULL.
 */

int bst_size(struct bst* bst)
{
    if(bst->root)
    {
        return length(bst->root);
    }
    else
    {
        return 0;
    }
}

/*
 * This function should insert a new key/value pair into the BST.  The key
 * should be used to order the key/value pair with respect to the other data
 * stored in the BST.  The value should be stored along with the key, once the
 * right location in the tree is found.
 *
 * Params:
 *   bst - the BST into which a new key/value pair is to be inserted.  May not
 *     be NULL.
 *   key - an integer value that should be used to order the key/value pair
 *     being inserted with respect to the other data in the BST.
 *   value - the value being inserted into the BST.  This should be stored in
 *     the BST alongside the key.  Note that this parameter has type void*,
 *     which means that a pointer of any type can be passed.
 */


struct bst_node* temp(int key, void *value)
{
    struct bst_node* temp = malloc(sizeof(struct bst_node));
    int a;
    temp->key = key;

    temp->value = value;
    int b;
    temp->left = temp->right = NULL;
    return temp;
};

struct bst_node* insert(struct bst_node *bst, int key, void *value) 
{
    //printf
    //insert loops
    int a;
    if(bst==NULL)
     {
        //printf

        return temp(key, value);
    }
    if(key < bst->key) 
    {
        //printf
        int b;
        bst->left = insert(bst->left, key, value);//
        //for left
    }
    else 
    {
        int a;
        bst->right = insert(bst->right, key, value);
        //printf
    }
    //printf
    return bst;
        
        

    
    
}

void bst_insert(struct bst* bst, int key, void* value)
{
    int a;
    if(bst != NULL)
    {
        //printf
        //
        bst->root = insert(bst->root, key, value);

    }
    else
    {
        //printf
        printf("The number doesnt exist");
    }

}
struct bst_node* smallest_val(struct bst_node* node) 
{ 
     int a;
    struct bst_node* smol = node; 
    //for the smallest value
    //search through it 
    //check if smol exists

    while (smol && smol->left != NULL) 
        smol = smol->left; 
      //printf
    return smol; 
}

struct bst_node * succ(struct bst_node* node) 
{ 
    int mom;
  //for parent node 
  //will loop through it
    struct bst_node* current = node; 
    int b;
    //Itterator
    while (current && current->left != NULL) 
    //current = node->left
        
        current = current->left; 
    //printf
    return current; 
}
/*
 * This function should remove a key/value pair with a specified key from a
 * given BST.  If multiple values with the same key exist in the tree, this
 * function should remove the first one it encounters (i.e. the one closest to
 * the root of the tree).
 *
 * Params:
 *   bst - the BST from which a key/value pair is to be removed.  May not
 *     be NULL.
 *   key - the key of the key/value pair to be removed from the BST.
 */
struct bst_node* removekey(struct bst_node* node, int key){
  
  if(node == NULL)
  {
    return NULL;
    
  }
  else if(key < node->key)
  {
   
    node->left = removekey(node->left, key);
    return node;
  }
  else if(key > node->key)
  {
    
    node->right = removekey(node->right, key);
    return node;
  }
  else
  {
      //printf
    if (node->left == NULL && 0==0) 
    { 
        //printf
        struct bst_node *temp = node->right; 
        free(node); 
        //
        return temp; 
    } 
    else if (node->right == NULL && 0==0) 
    { 
        //printf
        struct bst_node *temp = node->left; 
        free(node); 
        return temp; 
    } 
        //print
      struct bst_node* temp = succ(node->right); 
    
      node->right = removekey(node->right, temp->key); 
    
   
  }
  return node;
}


void bst_remove(struct bst* bst, int key)
{
    assert(bst);
    bst->root = removekey(bst->root,key);
}

/*
 * This function should return the value associated with a specified key in a
 * given BST.  If multiple values with the same key exist in the tree, this
 * function should return the first one it encounters (i.e. the one closest to
 * the root of the tree).  If the BST does not contain the specified key, this
 * function should return NULL.
 *
 * Params:
 *   bst - the BST from which a key/value pair is to be removed.  May not
 *     be NULL.
 *   key - the key of the key/value pair whose value is to be returned.
 *
 * Return:
 *   Should return the value associated with the key `key` in `bst` or NULL,
 *   if the key `key` was not found in `bst`.
 */

 struct bst_node* get_help(struct bst_node* node, int key){
    if(node == NULL)
    {
      return NULL;
    }
    if (node->key == key)
    {
        return node;
    }
    
    if(node->key > key)
    {
      return get_help(node->left,key);
    }
    else 
    {
      return get_help(node->right,key);
    }
  

}

void* bst_get(struct bst* bst, int key)
{ 
    
    if(bst != NULL)
    { 
        struct bst_node *nodefound = get_help(bst->root,key);
        if(nodefound != NULL)
        {
          return nodefound->value;
        }
        else
        {
          return NULL;
        }
        
        
    }
    else
    {
        return NULL;
    }
}