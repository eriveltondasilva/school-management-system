<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;

class SearchServices
{
    public function searchPerson(Model $model, string $search)
    {
        $query = $model::select('id', 'name', 'email')
            ->where('id', $search)
            ->orWhere('name', 'like', "%{$search}%")
            ->orWhere('email', 'like', "%{$search}%")
            ->oldest('id')
            ->paginate(20);

        return $query;
    }
}
