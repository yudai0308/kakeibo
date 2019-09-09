<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccountUserTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $set_schema_table = 'account_user';

    /**
     * Run the migrations.
     * @table account_user
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

            $table->index(["account_id"], 'fk_account_user_accounts_idx');

            $table->index(["user_id"], 'fk_account_user_users1_idx');

            $table->unique(["id"], 'id_UNIQUE');


            $table->foreign('account_id', 'fk_account_user_accounts_idx')
                ->references('id')->on('accounts')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('user_id', 'fk_account_user_users1_idx')
                ->references('id')->on('users')
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
