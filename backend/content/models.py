from django.conf import settings
from django.db import models


class ArticleCategory(models.Model):
    """文章类别."""

    name = models.CharField("文章类别", max_length=255, unique=True)

    class Meta:
        verbose_name = "文章类别"
        verbose_name_plural = "文章类别"

    def __str__(self) -> str:  # pragma: no cover - human readable helper
        return self.name


class Article(models.Model):
    """文章内容."""

    category = models.ForeignKey(
        ArticleCategory,
        verbose_name="文章类别",
        on_delete=models.CASCADE,
        related_name="articles",
    )
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        verbose_name="文章所有者",
        on_delete=models.CASCADE,
        related_name="articles",
    )
    content = models.TextField("正文内容")
    created_at = models.DateTimeField("创建时间", auto_now_add=True)
    updated_at = models.DateTimeField("修改时间", auto_now=True)

    class Meta:
        verbose_name = "文章"
        verbose_name_plural = "文章"
        ordering = ("-created_at",)

    def __str__(self) -> str:  # pragma: no cover - human readable helper
        return f"{self.category}: {self.owner}"
