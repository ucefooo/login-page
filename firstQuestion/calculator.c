#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef enum TypeTag {
    ADD,
    SUB,
    MUL,
    DIV,
    FIBO
} TypeTag;

typedef struct Node
{
    TypeTag type;
    ssize_t value;
    ssize_t left;
    ssize_t right;
} Node;

Node *add_func(ssize_t a, ssize_t b)
{
    Node *node = malloc(sizeof(Node));
    if (!node)
        return NULL;
    node->type = ADD;
    node->value = a + b;
    node->left = a;
    node->right = b;
    return node;
}

Node *sub_func(Node *a,Node *b)
{
    Node *node = malloc(sizeof(Node));
    if (!node)
        return NULL;
    ssize_t a_value = a == NULL ? 0 : a->value;
    ssize_t b_value = b == NULL ? 0 : b->value;
    if (a_value == 0 || b_value == 0)
        node->type = FIBO;
    else
        node->type = SUB;
    node->value = b_value - a_value;
    node->left = 0;
    node->right = 0;
    return node;
}

Node *mul_func(ssize_t a, ssize_t b)
{
    Node *node = malloc(sizeof(Node));
    if (!node)
        return NULL;
    node->type = MUL;
    node->value = a * b;
    node->left = a;
    node->right = b;
    return node;
}

Node *div_func(ssize_t a, ssize_t b)
{
    Node *node = malloc(sizeof(Node));
    if (!node || b == 0)
    {
        printf("div by zero");
        return (NULL);
    }
    node->type = DIV;
    node->value = a / b;
    node->left = a;
    node->right = b;
    return node;
}

ssize_t fibo_fun(ssize_t index)
{
    if (index <= 0)
        return 0;
    if (index == 1)
        return 1;
    return fibo_fun(index - 1) + fibo_fun(index - 2);
}

void calc(Node *obj)
{
    if (!obj)
    {
        printf("please enter a valid string ; add | sub | mul | div | fibo\n");
        return;
    }
    
    if (obj->type == ADD)
    {
        printf("add: %zd\n",obj->value);
    }
    else if (obj->type == SUB)
    {
        printf("sub: %zd\n",obj->value);
    }
    else if (obj->type == MUL)
    {
        printf("mul: %zd\n",obj->value);
    }
    else if (obj->type == DIV)
    {
        printf("div: %zd\n",obj->value);
    }
    else if (obj->type == FIBO)
    {
        printf("fibo: %zd\n",fibo_fun(obj->value - 1));
    }
    else
    {
        printf("please enter a valid string ; add | sub | mul | div | fibo\n");
    }
    
}

Node *(*makeFunc(TypeTag type))()
{
    switch (type)
    {
    case ADD:
        return add_func;
    case MUL:
        return mul_func;
    case DIV:
        return div_func;
    case SUB:
        return sub_func;
    default:
        return NULL;
    }
}

int main()
{
    Node *add = (*makeFunc(ADD))(10, 6); 
    Node *mul = (*makeFunc(MUL))(5, 4);
    Node *sub = (*makeFunc(SUB))(mul, add);
    Node *fibo = (*makeFunc(SUB))(sub, NULL);

    calc(add);
    calc(mul);
    calc(sub);
    calc(fibo);
}
