from django.contrib.contenttypes.models import ContentType
from consultations.models import Counseling
from common.models import Comment
from magazine.models import Blog
from community.models import Question
from transactions.models import Withdraw, Transaction
from goodmood import exceptions


def get_content_type(app, object_id):
    if app == 'magazine':
        content_type = ContentType.objects.get_for_model(Blog)
        if not Blog.objects.filter(id=object_id).exists():
            raise exceptions.ObjectIdException()

    elif app == 'consultations':
        content_type = ContentType.objects.get_for_model(Counseling)
        if not Counseling.objects.filter(id=object_id).exists():
            raise exceptions.ObjectIdException()

    elif app == 'comment':
        content_type = ContentType.objects.get_for_model(Comment)
        if not Comment.objects.filter(id=object_id).exists():
            raise exceptions.ObjectIdException()

    elif app == 'questions':
        content_type = ContentType.objects.get_for_model(Question)
        if not Question.objects.filter(id=object_id).exists():
            raise exceptions.ObjectIdException()
    else:
        raise exceptions.AppException()

    return content_type


def withdraw(object_id, content_type, amount, owner, description):

    try:
        Withdraw.objects.create(
            object_id=object_id,
            content_type=get_content_type(content_type, object_id),
            transaction=Transaction.objects.create(
                amount=amount,
                owner=owner,
                description=description
            )
        )
        return True
    except:
        return False
