<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $set_schema_table = 'items';

    /**
     * Run the migrations.
     * @table items
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable($this->set_schema_table)) return;
        Schema::create($this->set_schema_table, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('account_id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('category_id');
            $table->string('name', 45);
            $table->integer('amount');
            $table->dateTime('date');

            $table->index(["account_id"], 'fk_items_accounts1_idx');

            $table->index(["category_id"], 'fk_items_categories1_idx');

            $table->index(["user_id"], 'fk_items_users1_idx');

            $table->unique(["id"], 'id_UNIQUE');


            $table->foreign('account_id', 'fk_items_accounts1_idx')
                ->references('id')->on('accounts')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('user_id', 'fk_items_users1_idx')
                ->references('id')->on('users')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('category_id', 'fk_items_categories1_idx')
                ->references('id')->on('categories')
                ->onDelete('no action')
                ->onUpdate('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
     public function down()
     {
       Schema::dropIfExists($this->set_schema_table);
     }
}
