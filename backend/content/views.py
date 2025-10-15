from rest_framework import permissions, viewsets
from rest_framework.permissions import SAFE_METHODS, BasePermission

from .models import Article, ArticleCategory
from .serializers import ArticleCategorySerializer, ArticleSerializer


class IsOwnerOrReadOnly(BasePermission):
    """Allow owners to edit, everyone can read."""

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.owner == request.user


class ArticleCategoryViewSet(viewsets.ModelViewSet):
    queryset = ArticleCategory.objects.all().order_by("name")
    serializer_class = ArticleCategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def get_queryset(self):
        return Article.objects.select_related("category", "owner").all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
