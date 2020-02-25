<?php if (count($errors) > 0) : ?>
	<div class = "errors">
		<?php foreach ($errors as $error) : ?>
			<div class = "error">
				<?php echo $error ?>
			</div>
		<?php endforeach ?>	
</div>
<?php endif ?>