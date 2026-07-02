<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('about_settings', function (Blueprint $table) {
            if (! Schema::hasColumn('about_settings', 'about_us_id')) {
                $table->integer('about_us_id')->default(0)->after('id');
            }

            if (! Schema::hasColumn('about_settings', 'order')) {
                $table->integer('order')->default(0)->after('hero_image');
            }

            if (! Schema::hasColumn('about_settings', 'is_active')) {
                $table->boolean('is_active')->default(true)->after('order');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('about_settings', function (Blueprint $table) {
            if (Schema::hasColumn('about_settings', 'is_active')) {
                $table->dropColumn('is_active');
            }
            if (Schema::hasColumn('about_settings', 'order')) {
                $table->dropColumn('order');
            }
            if (Schema::hasColumn('about_settings', 'about_us_id')) {
                $table->dropColumn('about_us_id');
            }
        });
    }
};
