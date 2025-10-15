from rest_framework import serializers

from .models import Article, ArticleCategory


class ArticleCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleCategory
        fields = ["id", "name"]


class ArticleSerializer(serializers.ModelSerializer):
    owner = serializers.StringRelatedField(read_only=True)
    category = ArticleCategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=ArticleCategory.objects.all(), source="category", write_only=True
    )

    class Meta:
        model = Article
        fields = [
            "id",
            "category",
            "category_id",
            "owner",
            "content",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["created_at", "updated_at", "owner", "category"]

    def create(self, validated_data):
        request = self.context["request"]
        validated_data["owner"] = request.user
        return super().create(validated_data)

    def update(self, instance, validated_data):
        # allow updating category via category_id
        return super().update(instance, validated_data)
